import React from 'react';
import './content-area.styles.scss';

function ContentArea({acf}) {

    const { content_area_rows } = acf;

    return (
        <div className="content-area module has-inner-modules container">
            {content_area_rows.map(({column_one, column_two, column_three, column_four}, i) => (
                <div className={`content-area-row `} key={i}>  
                    { column_one && 
                        <div dangerouslySetInnerHTML={{ __html: column_one.content}} className="column-one the-content inner-module"></div>
                    }
                    
                    { column_two && 
                        <div dangerouslySetInnerHTML={{ __html: column_two.content}} className="column-two the-content inner-module"></div>
                    }

                    { column_three && 
                        <div dangerouslySetInnerHTML={{ __html: column_three.content}} className="column-three the-content inner-module"></div>
                    }

                    { column_four && 
                        <div dangerouslySetInnerHTML={{ __html: column_four.content}} className="column-four the-content inner-module"></div>
                    }
                </div>
            ))}
        </div>
    )
}

export default ContentArea;