using System;

namespace honlSoft.Patterns.Factory {
    
    public class VehicleFactory {
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