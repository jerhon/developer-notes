using System;

namespace honlSoft.Patterns.Factory {
    public class Plane : IVehicle
    {
        public void AccelerateTo(int toSpeed)
        {
            Console.WriteLine("Flying at speed: " + toSpeed);
        }
    }
}