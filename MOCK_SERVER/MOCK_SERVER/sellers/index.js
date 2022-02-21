const casual = require('casual')
// const casual = require('casual').nl_NL
const company = ['Lenovo','HP','Dell','samsung','Apple','Boat','Sony','Qualcomm']
const product =['Laptop','MacBook','Android','Headset','chip']
module.exports = () => {
    casual.define('seller', function() {
        return {       
 anPersonId: casual.ip,
  first_name:casual.first_name,
  last_name:casual.last_name,
  externalId:casual.uuid,
  companyName:company[Math.floor(Math.random()*company.length)],
  cardType:casual.card_type,
  product:product[Math.floor(Math.random()*product.length)],
  phone: casual.phone,
  email: casual.email
 
        }
    })

    const data = {
        Laptop: [],
        MacBook:[],
        Android:[],
        Headset:[],
        chip:[]

    }
    // Create 100 users
    for (let i = 0; i <400; i++) {    
        let prod = casual.seller
        prod.companyName = prod.product ==='MacBook'?'Apple':  prod.companyName;
        data[prod.product].push(prod)
    }
    return data
}