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

