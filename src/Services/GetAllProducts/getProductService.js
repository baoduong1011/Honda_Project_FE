import Axios from 'axios';
class GetAllProducts {
    GettingAllProducts() {
        return Axios({
            method:"GET",
            url:"http://localhost:3000/api/v2/oils/"
        })
    }
}

export default GetAllProducts;