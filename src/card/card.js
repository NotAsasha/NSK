import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import twoplustwo from "../img/2plus2.jpg"
import twominustwo from "../img/2minus2.jpg"
import twonatwo from "../img/2mnogine2.jpg"
import oneUndefin from "../img/oneUndef.png"
import HardTasks from "../img/hardTasks.jpg"

function CardBootstrap() {
  return (
    <div>
      <div className="CardsBootstrap">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={twoplustwo} />
          <Card.Body>
            <Card.Title>Додавання</Card.Title>
            <Card.Text>
              Перший і найлегший тип задач, інколи складний для менших дітей, а для більших може бути як завдання на швидкість і як змагання з друзями.
            </Card.Text>
            <Button href="/NSK/addition" variant="primary" >Почати Навчання!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={twominustwo} />
          <Card.Body>
            <Card.Title>Віднімання</Card.Title>
            <Card.Text>
              Вже не так легко як додавання, але труднощів принести не має. Як і додавання, може використовуватись для перевірки швидкості і змагань.
            </Card.Text>
            <Button href="/NSK/subtraction" variant="primary">Почати Тренуватись!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={twonatwo} />
          <Card.Body>
            <Card.Title>Множення</Card.Title>
            <Card.Text>
              Набагато сладніший за перші дві тип задач. Можна організовувати цілі турніри по кількості виконаних завдань. Радимо вам не пропустити таку можливість!
            </Card.Text>
            <Button href="/NSK/multiplication" variant="primary">Почати Розв`язання!</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="CardsBootstrap1">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={oneUndefin} />
          <Card.Body>
            <Card.Title>Задачі з 1 невідомим</Card.Title>
            <Card.Text>
              Задача, для якої потрібна логіка. У цих видах задач набагато цікавіше робити завдання на швидкість! Тут присутні задачі з додаванням і з відніманням.
            </Card.Text>
            <Button href="/NSK/oneundef" variant="primary">Почати Урок!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={HardTasks} />
          <Card.Body>
            <Card.Title>Тяжкі задачі</Card.Title>
            <Card.Text>
              Найважчі задачі на цьому сайті. Містить в собі багато завдань з різних частин математики. Їх вже не вийде зробити так само швидко, як минулі рівні.
            </Card.Text>
            <Button href="/NSK/hardtask" variant="primary">Почати Урок!</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
};
export default CardBootstrap;