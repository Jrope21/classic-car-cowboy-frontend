import React from 'react';
import './content-area.styles.scss';

function ContentArea({acf}) {

    const { content_area_rows } = acf;

    return (
        <div className="content-area module">
            {content_area_rows.map(({column_one, column_two, column_three, column_four}) => (
                <div className="content-area-row inner-module">  
                    {column_one && 
                        <div dangerouslySetInnerHTML={{ __html: column_one.content}} className="column_one"></div>
                    }
                    
                    {column_two && 
                        <div dangerouslySetInnerHTML={{ __html: column_two.content}} className="column_one"></div>
                    }

                    {column_three && 
                        <div dangerouslySetInnerHTML={{ __html: column_three.content}} className="column_one"></div>
                    }

                    {column_four && 
                        <div dangerouslySetInnerHTML={{ __html: column_four.content}} className="column_one"></div>
                    }
                </div>
            ))}
        </div>
    )
}

export default ContentArea;