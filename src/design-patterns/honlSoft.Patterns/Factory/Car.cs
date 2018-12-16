using System;

namespace honlSoft.Patterns.Factory
{
    public class Car : IVehicle
    {
        public void AccelerateTo(int toSpeed)
        {
            Console.WriteLine("Driving at speed: " + toSpeed);
        }
    }
}
