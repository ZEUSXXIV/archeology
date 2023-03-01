import { Typography } from "antd";
import styles from "../styles/History.module.css";
export default function History(){
    return(<>
        <div >
        <Typography className={`${styles.title}`}> Vision</Typography>
        </div>
        <p className={`${styles.content}`}>To promote feeling of great pride of Goa’s Archaeological and cultural heritage and preservation of it for posterity.</p>
        
        <Typography className={`${styles.title}`}> Our Mission </Typography>
           <p className={`${styles.content}`}> 1. Acquire, Protect, Preserve, Conserve/Re store, Maintain and create awareness of the archaeological and historical wealth of the state.
           <br/> 2. Encouraging the public for the study of Goa’s History, Heritage & Archaeology.</p>
         <Typography className={`${styles.title}`}>History</Typography>
        <p className={`${styles.history}`}>Historical Archives of Goa was established on 25th February 1595, 427 years ago making it Asia’s one of the oldest Archives. The then Portuguese Government established the Department of Archives in 1930 and in 1931, subsequently Dr. Pandurang Pissurlekar was appointed as its Director. The Archives department was also conducting archaeological survey with the help of various committees called as ‘archaeological committees’, as a result it led to a huge pile up of archaeological material in the department. With due efforts of former Director’s Dr. Shri. Pandurang Pissurlekar and Dr. Shri. V.T. Gune. In the year 1977 Museum was established and Department underwent expansion which was known as Directorate of Archives Archaeology and Museum. In the year 1999 the directorate was further bifurcated into Directorate of Museum. Further down in the year 2022 the Directorate of Archives and Archaeology was bifurcated into 2 independent departments namely Department of Archives and Department of Archaeology.<br/>
        <br></br>Under the Department of Archaeology, the State of Goa has listed 51 monuments of State importance for protection based on the Archaeological, historical and cultural Significance of the same. These monuments are governed by ‘The Goa, Daman and Diu Ancient Monuments and Archaeological Sites and Remains Act and Rules, 1978 and 1980’.
        <br/><br/>The primary role of the Department of Archaeology is to Acquire, Protect, Preserve, Conserve/Restore, Maintain and create Awareness of the Archaeological wealth and cultural Heritage by the scientific and systematized methodology which represents the various Historical and archaeological facets of Goa, right from the time of prehistoric age up to the Portuguese period. It consists of temples, forts, mosques, church, tanks, rock art and few Historically significant sites of Goa’s past. </p>
        </>
    )
}