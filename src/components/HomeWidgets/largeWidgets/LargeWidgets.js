import React from 'react';
import "./LargeWidgets.css"
const LargeWidgets = () => {

   const Button = ({type}) => {
       return(<button className={"widgetLgButton " + type}>  
       {type}

       </button>)
   }



    return ( 
        <div class="widgetLg">
            <h3 class="widgetLgTitle">Latest Transactions</h3>
            <table class="widgetLgTable">
                <tr class="widgetLgTr">
                    <th class="widgetLgTh">Customer</th>
                    <th class="widgetLgTh">Date</th>
                    <th class="widgetLgTh">Amount</th>
                    <th class="widgetLgTh">Status</th>
                </tr>
                <tr class="widgetLgTr">
                    <td class="widgetLgUser">
                        <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="widgetLgImage"/>
                            <span class="widgetLgName">Aztek Tomb</span>

                    </td>
                    <td class="widgetLgDate"> 13 April  2021</td>
                    <td class="widgetLgAmount">$100.00</td>
                    <td class="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr class="widgetLgTr">
                    <td class="widgetLgUser">
                        <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="widgetLgImage"/>
                            <span class="widgetLgName">Chris Harris</span>

                    </td>
                    <td class="widgetLgDate"> 11 August  2021</td>
                    <td class="widgetLgAmount">$9.99</td>
                    <td class="widgetLgStatus"><Button type="Rejected" /></td>
                </tr>
                <tr class="widgetLgTr">
                    <td class="widgetLgUser">
                        <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="widgetLgImage"/>
                            <span class="widgetLgName">Carl Weathers</span>

                    </td>
                    <td class="widgetLgDate"> 13 April  2021</td>
                    <td class="widgetLgAmount">$100.00</td>
                    <td class="widgetLgStatus"><Button type="Pending" /></td>
                </tr>
                <tr class="widgetLgTr">
                    <td class="widgetLgUser">
                        <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="widgetLgImage"/>
                            <span class="widgetLgName">Aztek Tomb</span>

                    </td>
                    <td class="widgetLgDate"> 13 April  2021</td>
                    <td class="widgetLgAmount">$100.00</td>
                    <td class="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr class="widgetLgTr">
                    <td class="widgetLgUser">
                        <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="widgetLgImage"/>
                            <span class="widgetLgName">Aztek Tomb</span>

                    </td>
                    <td class="widgetLgDate"> 13 April  2021</td>
                    <td class="widgetLgAmount">$100.00</td>
                    <td class="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
            </table>

        </div>
     );
}
 
export default LargeWidgets;