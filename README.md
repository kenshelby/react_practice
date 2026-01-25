/*
        appLayout
            Header
                logo
                navitems
            end    
            Body
                SearchBar
                RestaurantContainer
                    RestaurantCard
                        img
                        res-details
                    end
                end     
            end            
            Footer
            end
        end    
 */


 // filter for restaurants

 after adding the filter for restaurants, the variable was updated with the filtered list.
 but the UI did not update. bcoz the component(function) needs to be called to update the UI.
 for that we need to render.
 render will occur when the state changes
 so we used useState Hook to achieve that.

 // added slider filter

 you can pass function to the child from parent
 when state changes in child it is rendered and will call the method inside parent
 in case of multiple onChange calls required, you can use it only once
 write a method handleChange and use it.


// added functionality to searchbox

onChange={handleChange} and onChange={(e) => handleChange(e)}
in the first case the evnt is passed automatically
in the latter the event has to be passed explicitly
{handleChange} here we are passing the reference and it is called only upon the event firing
handleChange(e) >> this is an immideate call. causes unnecessary bugs
