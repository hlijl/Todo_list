const todo = document.createElement("div")
todo.classList.add("todo")
document.body.append(todo)

const title = document.createElement("h1")
title.classList.add("todo__title")
title.textContent = "To Do List"
todo.append(title)

const form = document.createElement("form")
form.classList.add("todo__form")
todo.append(form)

const titleInput = document.createElement("input")
titleInput.classList.add("field__input")
titleInput.placeholder = "Название задачи"
form.append(titleInput)

const deadlineInput = document.createElement("input")
deadlineInput.classList.add("field__input")
deadlineInput.type = "date"
form.append(deadlineInput)

const peopleInput = document.createElement("input")
peopleInput.classList.add("field__input")
peopleInput.placeholder = "Имя ответсвенного"
form.append(peopleInput)

const submitButton = document.createElement("button")
submitButton.classList.add("button")
submitButton.type = "submit"
submitButton.textContent = "Добавить"
form.append(submitButton)

const errorMessage = document.createElement("p")
errorMessage.classList.add("todo__empty-message")
todo.append(errorMessage)

const taskList = document.createElement("ul")
taskList.classList.add("todo__list")
todo.append(taskList)

/* const testTask = document.createElement("li")
testTask.textContent = "Тест"
taskList.append(testTask) */

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const taskTitle = titleInput.value.trim()
    const taskDeadline = deadlineInput.value.trim()
    const taskPeople = peopleInput.value.trim()

    if (taskTitle === "" || taskDeadline === "" || taskPeople === "") {
        errorMessage.textContent = "Заполни все поля"
        return
    }

    errorMessage.textContent = ""

    const taskItem = document.createElement("li")
    taskItem.classList.add("todo-item")

    const checkbox = document.createElement("input")
    checkbox.classList.add("todo-item__checkbox")
    checkbox.type = "checkbox"
    taskItem.append(checkbox)

    const taskInfo = document.createElement("div")
    taskInfo.classList.add("todo-item__label")
    taskItem.append(taskInfo)

    const taskName = document.createElement("p")
    taskName.textContent = `Задача: ${taskTitle}`
    taskInfo.append(taskName)

    const taskDate = document.createElement("p")
    taskDate.textContent = `Дедлайн: ${taskDeadline}`
    taskInfo.append(taskDate)

    const taskPerson = document.createElement("p")
    taskPerson.textContent = `Ответственный: ${taskPeople}`
    taskInfo.append(taskPerson)

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("button")
    deleteButton.textContent = "Удалить"
    taskItem.append(deleteButton)

    taskList.append(taskItem)

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskItem.classList.add("completed")
        } else {
            taskItem.classList.remove("completed")
        }
    })

    deleteButton.addEventListener("click", function () {
        taskItem.remove()
    })

    titleInput.value = ""
    deadlineInput.value = ""
    peopleInput.value = ""
})