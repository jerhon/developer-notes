using System;
using Xunit;

namespace honlSoft.Patterns.Factory {
    public class VehicleFactoryTests {

        [Fact]
        public void CreateVehicle_driveCreatesCar() {
            VehicleFactory factory = new VehicleFactory();
            var driveVehicle = factory.CreateVehicle(TravelMethod.Drive);
            Assert.NotNull(driveVehicle);
            Assert.IsType<Car>(driveVehicle);
        }

        [Fact]
        public void CreateVehicle_flyCreatesPlane() {
            VehicleFactory factory = new VehicleFactory();
            var flyVehicle = factory.CreateVehicle(TravelMethod.Fly);
            Assert.NotNull(flyVehicle);
            Assert.IsType<Plane>(flyVehicle);
        }

        [Fact]
        public void CreateVehicle_unsupportedTravelMethod() {
            VehicleFactory factory = new VehicleFactory();
            Assert.Throws<NotSupportedException>(() => factory.CreateVehicle((TravelMethod)30));
        }

    }
}