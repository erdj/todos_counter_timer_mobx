import { Button, Card } from 'react-bootstrap'
import React from 'react'
import styles from './styles/Counter.module.css'
import useCounter from '../hooks/useCounter';

function Counter() {
    const [increment, decrement, count] = useCounter()
        
    return (
        <div className={styles.myCounter}>
            <Card className={styles.myCard}>
                <Card.Header className={styles.myCard__item__header}>Counter</Card.Header>
                <Card.Body className={styles.myCard__item__body}>
                    <Card.Title className={styles.myCard__item__count}>{count}</Card.Title>
                    <div className={styles.myCard__item__btns}>
                        <Button className={styles.myBtn} onClick={increment} variant='success'>+</Button>
                        <Button className={styles.myBtn} onClick={decrement} variant="warning">-</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Counter