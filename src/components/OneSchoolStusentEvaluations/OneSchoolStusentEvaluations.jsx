import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { FaBook, FaUserCheck, FaUsers } from 'react-icons/fa';
import './oneschoolstudent.css';

export default function OneSchoolStusentEvaluations() {
  const navigate = useNavigate();
  const { schoolCode } = useParams();

  const evaluationCards = [
    {
      title: 'بطاقات تقييم الكتب',
      description: 'عرض وإدارة تقييمات الطلاب للكتب المقروءة',
      icon: <FaBook className="card-icon books-card" />,
      path: `/Bookevaluations/${schoolCode}`,
      className: 'books-card'
    },
    {
      title: 'التقييمات الذاتية',
      description: 'متابعة التقييمات الذاتية للطلاب وتطورهم',
      icon: <FaUserCheck className="card-icon self-assessment-card" />,
      path: `/Selfevaluations/${schoolCode}`,
      className: 'self-assessment-card'
    },
    {
      title: 'تقييمات أندية القراءة',
      description: 'تقييمات الطلاب في أندية القراءة المدرسية',
      icon: <FaUsers className="card-icon reading-club-card" />,
      path: `/Clubevaluations/${schoolCode}`,
      className: 'reading-club-card'
    }
  ];

  return (
    <div className="student-evaluations">
      <Container>
        <h1 className="evaluation-title">تقييمات الطلاب</h1>
        <div className="cards-container">
          <Row className="justify-content-center">
            {evaluationCards.map((card, index) => (
              <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                <Card 
                  className={`evaluation-card ${card.className}`}
                  onClick={() => navigate(card.path)}
                >
                  <Card.Body className="card-body" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {card.icon}
                    <Card.Title className="card-title">{card.title}</Card.Title>
                    <Card.Text className="card-text">
                      {card.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}