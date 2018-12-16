using System;

namespace honlSoft.Patterns.Factory {
    
    /// <summary>
    /// This class is an example of a simple Factory.  The factory returns an object implementing the interface IVehicle that can travel with the specified method.
    /// </summary>
    public class VehicleFactory : IVehicleFactory {
        
        
        public IVehicle CreateVehicle(TravelMethod howToTravel) {
            switch (howToTravel) {
                case TravelMethod.Drive:
                    return new Car();
                case TravelMethod.Fly:
                    return new Plane();
                default:
                    throw new NotSupportedException("Factory cannot create vehicle to travel by method: " + howToTravel);
            }
        }
    }
}