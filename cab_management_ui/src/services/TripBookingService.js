import axios from "axios";

const TRIPBOOKING_API_BASE_URL="http://localhost:8080/api/booking";
class TripBookingService{
    saveTripBooking(tripbooking)
    {
        return axios.post(TRIPBOOKING_API_BASE_URL,tripbooking);
    }

    getTripBooking()
    {
        return axios.get(TRIPBOOKING_API_BASE_URL);
    }
    deleteTripBookingById(tripBookingId)
    {
        return axios.delete("http://localhost:8080/api/booking/"+tripBookingId);
    }
    getTripBookingById(tripBookingId){
        return axios.get("http://localhost:8080/api/booking/"+tripBookingId);
    } 
    updateTripBooking(tripBooking,tripBookingId){
        return axios.put(`http://localhost:8080/api/booking/${tripBookingId}`,tripBooking)
    }

}
export default new TripBookingService();