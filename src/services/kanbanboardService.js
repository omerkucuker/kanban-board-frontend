import axios from "axios"

export default class KanbanboardService {

    getByBoardId(id) {
        return axios.get("http://localhost:5000/boards/getall/" + id);
    }

    addNewcard(desc, id) {        
           return axios.post("http://localhost:5000/cards", {
                CardDescription: desc,
                TaskList_Id: id
            }).then( (response) =>response.data.id
                //console.log(response.data.id);                 
            ).catch(function (error) {
                //console.log(error);
            });
    }
    

    deleteCard(id) {
        axios.delete("http://localhost:5000/cards/" + id);
    }
}