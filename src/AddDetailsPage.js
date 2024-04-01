import details from './Details';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddDetails from './Adddetails';
import "./Adddetails.css"


function Adding() {
    return (
      <div>
        <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto auto auto", justifyContent: 'center', gap: '20px'}}>      
      {details.map((item, index) => (
        <Card style={{ width: '18rem' }}>
      {index === 0 &&<Card.Img variant="top" src={item.poster} />}
      {index === 2 &&<Card.Img variant="top" src={item.poster} />}

      <Card.Body>

        {index === 0 &&<Card.Title>{item.title}</Card.Title>}
        {index === 0 &&<Card.Text>Rate: {item.rate} </Card.Text>}
        {index === 0 &&<Card.Text>{item.description} </Card.Text>}

        {index === 2 &&<Card.Title>{item.title}</Card.Title>}
        {index === 2 &&<Card.Text>Rate: {item.rate} </Card.Text>}
        {index === 2 &&<Card.Text>{item.description} </Card.Text>}

        {/* this is the video card index ===1 */}
        {index === 1 && <AddDetails />}
        {index === 0 &&<Button variant="primary">Go somewhere</Button>}

        {index === 2 &&<Button variant="primary">Go somewhere</Button>}

      </Card.Body>
    </Card>
      ))}
    </div>




        </div>
  );
}
     

export default Adding;