import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getUser} from '../Duxx/reducer'

// const navbar = {
//     height: '100px',
//     width: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     backgroundColor: 'black',
//     /* background-image: url("https://lh3.googleusercontent.com/u3SaizKkTRDMryv65JjZZ0bQlQ4DKP93E28V75bkPFZ8KamvtEcSbWt96CnUl9RAK_BBNMrMV6ea3smvYVJqFs35yFtkHiC7tsWxy3JLtg6cZQeUIKuoOgvBJ3yfbky1cq2c7xOxFJvwEyNB--VqQBJJY27Rj8TFDqD6tNmmx5hZUJosiBaxX1PEHOYrgX58luQdOBnPm2Nj1MVNq80j6njHY-rNZvmP2aT1qQwvxY2W6d8FFxnvlsiUEezfMaN-xKyj2j3ag1pT3FrJawias90L4KjenFUt_SkurrpILTIfvl7H9E2ZjY3EDRxNr--vhjxCos48FszkWfNdr9MioKQDC-gSeZeMRxmrTlW_wWVNIEXMRi5pmTToE5Cx8SGAX15tBnK6a91yWbVhxcB0W0_juR8jsub1tRsa58GjUccaqU1FqpUhKu3Xyb5PoxvZHbKYUE1VUE1mxoPEIom-LLq0t151m4rR0uO3evwJ5-fWlZe2d2KilD1nkrD0k75tgiS345TUc8_ejA456Zs2yOJd-RlKOKnssFi4YI4DjihQh0B7W49zb-g0xIBz811ogxvkewn-LNHivZpyAXJSyMZtwAsO7fcVRwneEymuaYIv9KRa1H2p33TomGZ8aZ5q94qEIKEASFJ1ZzHV427wYB4rJC5Ly0XiidxGw_XLYnXMpf5q2VAZu927=w876-h659-no"); */
//     // objectFit: cover;
//     // background-repeat: no-repeat;
//     // background-size: 100%;
//     // background-position: center;
//     color: '#f2f2f2'
//     /* font-style:  ; */
//   }
  
//   @media(max-width: 800px){
//     .navbar{
//       width: '800px',
//       height: '400px',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'space-around'
  
//     }
//   }


const Nav = ({history}) => {
    return(

        <div className = 'navbar'>
            DRILL LOG
            <button onClick = {() => history.push('/')} >home</button>
            <button onClick = {() => history.push('drills')}>drill archive</button>
            <button onClick = {() => history.push('mytraining')}>my training</button>
            
        </div>
        )
}

export default (withRouter(Nav))