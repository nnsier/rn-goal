import React, { useState } from 'react';
import { StyleSheet,View, Button,FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import Input from './components/Input';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: enteredGoal} ]);
    setEnteredGoal('');
    setIsAddMode(false);
  }

  const cancelGoalHandler = () => {
    setEnteredGoal('');
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <Input
        title="ADD"
        placeHolder="Course Goals"
        inputHandler={goalInputHandler}
        buttonHandler={addGoalHandler}
        value={enteredGoal}
        visible={isAddMode}
        cancelHandler={cancelGoalHandler}
      /> 
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData => (<GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});
