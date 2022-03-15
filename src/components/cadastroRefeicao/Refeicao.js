import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function Refeicao(){
    return (

        <div className='container '>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Alimento1" />
                    <Form.Control type="text" placeholder="Alimento2" />
                    <Form.Control type="text" placeholder="Alimento3" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Refeicao;