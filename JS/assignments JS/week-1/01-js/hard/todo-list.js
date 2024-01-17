/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor()
    {
        this.todoList = [];
    }

    add(todo) {
        this.todoList.push(todo);
    }

    remove(index) {
        this.todoList.splice(index, 1);    // spice here used to delete 1 element from index 1
    }

    update(index, updatedTodo) {
        if(index >= this.todoList.length)
            return;
        // this.todoList.splice(index, 0, updatedTodo)  // here spice used to: start at index, delete 0 & add updatedTodo at that index
        this.todoList[index] = updatedTodo;
    }

    getAll() {
        return this.todoList;
    }

    get(index) {
        if(index >= this.todoList.length)
            return null;
        return this.todoList[index];
    }

    clear() {
        // to remove all elems from list there are 2 approches:
        // this.todoList.splice(0, ar.length);      
        this.todoList.length = 0;
    }
}

module.exports = Todo;
