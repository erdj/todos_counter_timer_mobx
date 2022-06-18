import React from 'react'
import { Button, Card } from 'react-bootstrap'
import styles from '../styles/Counter.module.css'
import counter from '../store/counter'
import { observer } from 'mobx-react-lite'

const Counter = observer(() => {       
    return (
        <div className={styles.myCounter}>
            <Card className={styles.myCard}>
                <Card.Header className={styles.myCard_header}><span>Counter</span></Card.Header>
                <Card.Body className={styles.myCard_body}>
                    <Card.Title className={styles.myCard_count}><span>{counter.total}</span></Card.Title>
                    <div className={styles.myCard_btns}>
                        <Button variant="success" className={styles.myBtn} onClick={() => counter.increment()}>+</Button>
                        <Button variant="success" className={styles.myBtn} onClick={() => counter.decrement()}>-</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
})

export default Counter