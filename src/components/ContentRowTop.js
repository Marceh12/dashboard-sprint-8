import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import CategoriesInDb from './CategoriesInDb';
import ContentRowItems from './ContentRowItems';
import LastItemInDb from './lastItemInDb';


function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Gauchito Git Dashboard</h1>
					</div>
				
					{/*<!-- Content Row items-->*/}
					<ContentRowItems />
					{/*<!-- End items in Data Base -->*/}
					
	
					{/*<!-- Content Row Last item in Data Base -->*/}
					<div className="row">

					<LastItemInDb />
						{/*<!-- End content row last item in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<CategoriesInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;