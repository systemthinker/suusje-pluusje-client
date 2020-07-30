import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { selectClient } from '../../store/clients/selectors'
import { useSelector} from 'react-redux'

export default function OrderButton({loading}) {
    const client = useSelector(selectClient)
    const mystyle = {
        marginTop: "20px",
        height: "70px",
        width: "30%",
        
      };


      
    return (
        <div>
            <Button style={mystyle} size="lg" onClick={e=>{loading()}} variant="success">Voeg Toe Aan Winkelwagen</Button>
            <div>
            <Link to="/"><Button style={mystyle} variant="outline-primary" size="lg">{'<<'} Verder Winkelen </Button></Link>
            </div>
        </div>
    )
}
