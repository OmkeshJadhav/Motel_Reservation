# Motel Booking

## Home
* Add components to be displayed


## Navbar
1. navContainer div
2. Logo span
3. div for navItems
4. buttons inside navItems div

## Header
### Travel Content in Header
1. header div
2. headerContainer div
3. headerList div
4. headerListItems div for each item
5. Fontawesome icon and then span for name 
6. To show active item - Add additional classname and give css to it

### Description in Header
7. headerTitle div
8. headerDescription div
9. headerButton

### Search Data and Person selection
10. Install react-date-range library - Copy and paste its code and CSS
    * <DateRange
           editableDateInputs={true}
           onChange={item => setDate([item.selection])}
           moveRangeOnFirstSelection={false}
           ranges={date}
           className="date"
      />
    
    * const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date,
        key: "selection",
        },
    ]);
        
11. Install date-fns library - for formatting dates
    * Inside span : {`${format(date[0].startDate, "dd/mm/yyyy")} to ${format(date[0].endDate, "dd/mm/yyyy")}`} - formats date state of useState
    * Below span, paste <DateRange/> component imported from react-date-range. - Then position it using CSS.

12. To toggle visibility of Date calender - create useState and make changes accordingly
13. No of Persons and Room selection
    * Create useState which set initial value for No of persons and room (chooseNoOfPerson and setChooseNoOfPerson)
    * Also create another useState to handle it's visibility - Initially set it's value to false 
    * Create div for optionItems - This will have span for optionText(Adult, Children, Room) and optionCount div for increasing/decreasing the count
    * In optionCount div : 2 buttons - 1 for increment and 1 for decrement & 1 span to display the count
        * Span should dynamically display the count - using state of chooseNoOfPerson
        * Buttons onClick shall call a function (onClick={()=>handleOption("adult", "i")}) whih in turn increase or decrease the counts
            
            const handleOption = (name, operation) => {
                setChooseNoOfPerson(prev => {return {...prev, [name]: operation === "i" ? chooseNoOfPerson[name]+1 : chooseNoOfPerson[name]- 1}})
            }
    * Disable the count buttons when at appropriate count. 
            <button disabled={chooseNoOfPerson.room < 2}>-</button>


## Hotels List
* We have to reuse the navbar and header components on hotelsList page. But we don't want to use searchbar and other textual content of header component. So for that
    * Pass a prop 'type = HotelsList' to Header component in HotelsList component.
    * Now in Header component receive this prop and now make a condition for the part you don't want to display i.e. type !== "hotelsList" && - if type is not hotelsList then only display the content and if type is hotelsList then don't display it. You need to wrap the content in {} with which you are playing with.
    * Now to handle the styling for this, conditionally give the className and make changes accordingly
        * <div className= {type === "hotelsList" ? "headerContainer hotelsList" : "headerContainer"}>

## Featured Cities
* Image and Title - Hard Coded


## Filter / Search
###On home page
1. onClick of Search button it should navigate us to hotelsList page - For that use useNavigate
    * const navigate = useNavigate()
    * const handleSearch = () => {
        navigate("/hotelsList")
    }

2. To capture the input in search bar
    * Create State : const [destination, setDestination] = useState("")
    * On change in input it's state should change : 
            <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
                onChange={e=>setDestination(e.target.value)}
            />

3. Now pass the updated state to hotelsList page through navigate
    * navigate("/hotelsList", {state : {destination, date, chooseNoOfPerson}})

### On hotelsList page
4. Import useLocation hook from react-router-dom - This will have all the values passed as prop to naviaget
    * const location = useLocation()
    * Check the received value by logging location
5. From props received -
    * Get values for destination, date and chooseNoOfPersons and use them wherever needed - Use either directly or through useState
        const [destination, setDestination] = useState(location.state.destination)
        const [date, setDate] = useState(location.state.date)
        const [chooseNoOfPerson, setchooseNoOfPerson] = useState(location.state.chooseNoOfPerson)



## To prevent Calender and option choosing overlap each other
1. onClick={(e) => {
        e.stopPropagation();
        setShowNoOfPerson(!showNoOfPerson);
        setDateVisible(false);
    }}
2. {showNoOfPerson && 
        <div className="options" onClick={e => e.stopPropagation()}>
        .
        .
        .
        </div>
3. Do similar for Option choosing

## To Close dropdowns when clicking outside
    const handleClickOutside = (e) => {
        if (!e.target.closest('.headerSearchItem')) {
            setDateVisible(false);
            setShowNoOfPerson(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

## To prevent selection of paste dates
    <DateRange
        minDate={new Date()}
    />