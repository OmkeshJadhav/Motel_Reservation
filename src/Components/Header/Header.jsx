import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { faBed, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // th
import { useState } from "react";
import { format } from "date-fns";

const Header = ({type}) => {
    const [dateVisible, setDateVisible] = useState(false)
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date,
        key: "selection",
        },
    ]);

    const [showNoOfPerson, setShowNoOfPerson] = useState(false)
    const [chooseNoOfPerson, setChooseNoOfPerson] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setChooseNoOfPerson(prev => {return {...prev, [name]: operation === "i" ? chooseNoOfPerson[name]+1 : chooseNoOfPerson[name]- 1}})
    }


    return (
        <div className="header">
            <div className= {type === "hotelsList" ? "headerContainer hotelsList" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItems active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                </div>
            { type !== "hotelsList" && 
            <>
                <div>
                    <h1 className="headerTitle">Find your next stay</h1>
                    <p className="headerDescription">
                        Search low prices on hotels, homes and much more...
                    </p>
                    <button className="headerButton">Sign In / Register</button>
                </div>

            {/* Searchbar */}
                <div className="headerSearch">
                    
                    {/* //# Search - What are you looking for */}
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input
                        type="text"
                        placeholder="Where are you going?"
                        className="headerSearchInput"
                        />
                    </div>

                    {/* //# Calender */}
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span className="headerSearchText" onClick={()=>setDateVisible(!dateVisible) }>
                            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                        </span>
                        {dateVisible && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>

                    {/* //# Select Persons and Room */}
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className="headerSearchText" onClick={()=>setShowNoOfPerson(!showNoOfPerson)}>
                        {`${chooseNoOfPerson.adult} Adult • ${chooseNoOfPerson.children} Children • ${chooseNoOfPerson.room} Room`}
                        </span>
                    
                        {showNoOfPerson && 
                            <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCount">
                                        <button className="optionCounterButton" onClick={()=>handleOption("adult", "d")} disabled={chooseNoOfPerson.adult < 2}>-</button>
                                        <span className="optionCounterNumber">{chooseNoOfPerson.adult}</span>
                                        <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCount">
                                        <button className="optionCounterButton" onClick={()=>handleOption("children", "d")} disabled={chooseNoOfPerson.children == 0}>-</button>
                                        <span className="optionCounterNumber">{chooseNoOfPerson.children}</span>
                                        <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                                    </div>
                                </div>

                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCount">
                                        <button className="optionCounterButton" onClick={()=>handleOption("room", "d")} disabled={chooseNoOfPerson.room < 2}>-</button>
                                        <span className="optionCounterNumber">{chooseNoOfPerson.room}</span>
                                        <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="headerSearchItem">
                        <button className="headerButton">Search</button>
                    </div>
        
                </div>
                </>}
            </div> 
        </div>
    );
};

export default Header;
