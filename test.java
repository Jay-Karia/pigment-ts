public class test {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
    // write a program to print the sum of two numbers

    int a = 10;
    int b = 20;

    int sum = a + b;

    // create a calculator class and move the above code to the calculator class
    System.out.println("Sum of " + a + " and " + b + " is " + sum);

    Calculator calculator = new Calculator();
    int result = calculator.add(a, b);
  }
}

class Calculator {
  public int add(int a, int b) {
    return a + b;
  }
}