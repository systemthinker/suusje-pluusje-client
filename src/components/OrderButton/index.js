import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { selectClient } from '../../store/clients/selectors'
import { useSelector} from 'react-redux'

export default function OrderButton() {
    const client = useSelector(selectClient)
    const mystyle = {
        marginTop: "20px",
        height: "70px",
        width: "30%",
        
      };
    return (
        <div>
            <Link to={`/basket/${client.id}`}><Button style={mystyle} variant="success" size="lg">Ik ga bestellen {'>>'}</Button></Link>
            <div>
            <Link to="/"><Button style={mystyle} variant="outline-primary" size="lg">{'<<'} Verder Winkelen </Button></Link>
            </div>
        </div>
    )
}

