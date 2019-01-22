namespace honlSoft.Patterns.Factory {

    /// <summary>
    /// Creates vehicles for travel.
    /// </summary>
    public interface IVehicleFactory
    {
        /// <summary>
        /// Creates a vehicle based on the method to travel.
        /// </summary>
        IVehicle CreateVehicle(TravelMethod howToTravel);
    }
}