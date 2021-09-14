import { Visibility } from '@material-ui/icons';
import React from 'react';
import "./SmallWidgets.css"
const smallWidget = () => {
    return ( <div className="widgetsm">
       <span className="wigetsmTitle">
           New Join Members
           <ul className="wigetsmList">
               <li className="wigetsmListItem">
                   <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetsmImage"/>
                   <div className="widgetsmUser">
                       <span className="wigetsmUsername">Aztek Tomb</span>
                       <span className="wigetsmUserTitle">web Devloper</span>
                   </div>
                   <button>
                       <Visibility className="widgetsmIcon"/>
                       Display
                   </button>
               </li>
               <li className="wigetsmListItem">
                   <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetsmImage"/>
                   <div className="widgetsmUser">
                       <span className="wigetsmUsername">Lyndsay Bluth</span>
                       <span className="wigetsmUserTitle">BackEnd Engineer</span>
                   </div>
                   <button>
                       <Visibility className="widgetsmIcon"/>
                       Display
                   </button>
               </li> <li className="wigetsmListItem">
                   <img src="https://images.pexels.com/photos/2659177/pexels-photo-2659177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetsmImage"/>
                   <div className="widgetsmUser">
                       <span className="wigetsmUsername">Buster Bluth</span>
                       <span className="wigetsmUserTitle">Project Manager</span>
                   </div>
                   <button>
                       <Visibility className="widgetsmIcon"/>
                       Display
                   </button>
               </li> <li class="wigetsmListItem">
                   <img src="https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" class="widgetsmImage"/>
                   <div class="widgetsmUser">
                       <span class="wigetsmUsername">Aztek Tomb</span>
                       <span class="wigetsmUserTitle">web Devloper</span>
                   </div>
                   <button>
                       <Visibility className="widgetsmIcon" />
                       Display
                   </button>
               </li> <li className="wigetsmListItem">
                   <img src="https://images.pexels.com/photos/8355846/pexels-photo-8355846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Profile picture" class="widgetsmImage"/>
                   <div className="widgetsmUser">
                       <span className="wigetsmUsername">Aztek Tomb</span>
                       <span className="wigetsmUserTitle">web Devloper</span>
                   </div>
                   <button>
                       <Visibility className="widgetsmIcon"/>
                       Display
                   </button>
               </li>
           </ul>
       </span>
    </div> );
}
 
export default smallWidget;