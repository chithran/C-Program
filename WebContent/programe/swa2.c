#include <stdio.h>
int main()
{
    double firstNumber, secondNumber;

    printf("Enter first number: ");
    scanf("%lf", &firstNumber);

    printf("Enter second number: ");
    scanf("%lf",&secondNumber);



    firstNumber = firstNumber - secondNumber;
    secondNumber = firstNumber + secondNumber;
    firstNumber = secondNumber - firstNumber;

    printf("\nAfter swapping, firstNumber =%.21f\n", firstNumber);
    printf("After swapping, secondNumber = %.21f", secondNumber);

    return 0;
}
