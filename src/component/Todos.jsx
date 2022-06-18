import React from 'react'
import { observer } from 'mobx-react-lite';
import todo from '../store/todo';
import styles from '../styles/Todos.module.css'
import { Button, Form } from 'react-bootstrap'
import btn_styles from '../styles/Counter.module.css'

const Todos = observer(() => {
  return (
    <div className={styles.myTodos}>
        <Button variant="success" className={`${btn_styles.myBtn} ${styles.myBtn_fetch}`} onClick={() => todo.fetchTodos()}><p>Fetch <span>TODOS</span></p></Button>
        {todo.todos.map(item => 
            <div key={item.id} className={styles.myTodos_item}>
                {/* <input className={styles.myTodos_item_input} value={item.completed} checked={item.completed} type='checkbox' onChange={() => todo.completeTodo(item)}/> */}
                <Form>
                    <Form.Check type={'checkbox'} id={`check-api-checkbox`}>
                      <Form.Check.Input checked={item.completed} value={item.completed} type={'checkbox'} isValid onChange={() => todo.completeTodo(item)}/>
                      {
                        item.completed
                        ? <Form.Control.Feedback type="valid">Good job!</Form.Control.Feedback>
                        : <Form.Control.Feedback type="valid">Just do it!</Form.Control.Feedback>
                      }
                    </Form.Check>
                </Form>
                <span>{item.title}</span>
                <Button className={`${btn_styles.myBtn} ${styles.myBtn_remove}`} onClick={() => todo.removeTodo(item.id)}>X</Button>
            </div>
        )}
    </div>
  )
})

export default Todos