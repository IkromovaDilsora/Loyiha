import {Component} from "react"
import {Container,Row,Col,Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyComputers from "./comp/MyComputers"
import Modal from "./comp/Modal"; 


 export default class App extends Component{

    state ={
        myComputers :[],
        isModal :true
    }
      
    componentDidMount(){
        const computers = [
             {
                name : "comp/1",
                protsessor :2,
                ram :4,
                ssd :"128 gb"
             },

             {
                name : "comp/2",
                protsessor :4,
                ram :8,
                ssd :"256 gb"
             },

             {
                name : "comp/3",
                protsessor :4,
                ram :4,
                ssd :"512 gb" 
             },
        ]

        this.setState({
            myComputers :computers 
        })
    }

          removButton = ((item) =>{
            let computers =this.state.myComputers
            computers.splice(item,1)
            this.setState({
                myComputers :computers
            })
          })

          openModal =(()=>{
            this.setState({
                isModal:false
            })
          })

          cancel = (()=>{
            this.setState({
                isModal :true
            })
          })

          saveList = ((name,protsessor,ram,ssd)=>{
            let myComputers =this.state.myComputers
            let computer ={
                name,
                protsessor : parseInt(protsessor),
                ram : parseInt(ram),
                ssd : ssd === '' ? '256 gb' :ssd
            }

            // myComputers.push(computer)
            myComputers.unshift(computer)
            this.setState({
                myComputers,
                isModal :true
            })
          })

          componentWillUnmount() {

          }
       render(){
        return (
            <Container>
              {
                this.state.isModal ? "" : <Modal cancelModal ={this.cancel} saveList={this.saveList}/>
              }
             <MyComputers list={this.state.myComputers} removBtn={this.removButton} openModal ={this.openModal}/> 
        </Container> 

        ) 
    }
}