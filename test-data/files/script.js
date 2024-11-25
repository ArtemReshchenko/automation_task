// Sample user data
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', active: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', active: false },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', active: true }
  ];
  
  // Helper functions for testing
  function findUserById(id) {
    return users.find(user => user.id === id);
  }
  
  function filterActiveUsers() {
    return users.filter(user => user.active);
  }
  
  // Async function to simulate API call
  async function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = findUserById(userId);
        if (user) {
          resolve(user);
        } else {
          reject(new Error('User not found'));
        }
      }, 1000);
    });
  }
  
  // Calculator class for testing math operations
  class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) throw new Error('Division by zero');
      return a / b;
    }
  }
  
  // String utility functions
  const stringUtils = {
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
    reverse: (str) => str.split('').reverse().join(''),
    countWords: (str) => str.trim().split(/\s+/).length
  };
  
  module.exports = {
    users,
    findUserById,
    filterActiveUsers,
    fetchUserData,
    Calculator,
    stringUtils
  };