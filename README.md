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


//added API for location search and location input form

in this api call we get the lng and lat of the userinput, we have restricted the result to 3 no, withing India.
when the user types more than 3 letter the api call is made after the user stops typing for 2 sec(debouncing).
inside useEffect we call the api
the returned array will be the list of addresses matching the input query.
we display the result beow the loaction input box

//selecting the returned result of addresses

we click on the <AddessCard onClick={handleClick}>
once clicked we set the input value to the current clicked value name.
setQuery(name)
now we will have to clear tthe list of suggestion from the UI. setSuggestion([]).

once the query is changed the useEffect will run as it depends on the query, so we need to use another state
to avoid this. we use selectedLocation(location) hook to update the current selected location object.

inside useEffect we will check to see if the selectedLocation has a value to return or continue.

next part we will make the selectedLocation null if the user starts typing again or makes any changes to the location input.
