## HOWDY
This is a website created by Matthew Chang for CSCE 315-909 with Dr. Taele.heat, or steal, or tolerate those who do”
# “I have not given or received any unauthorized aid on this assignment”
# # Name: MATTHEW CHANG
# Course/Section: ENGR 102-216
# Assignment: Lab 5b Activity 1b
# Date: 24 SEPTEMBER 2019

print("This program uses for loops and while loops to compute the sum of all integers from 0 to the number entered as well as the product of all integers from 1 to the number entered.")
number = int(input("Enter a positive integer:  "))


#for loops
print("\nUsing for loop:")
sum=0
for i in range(number + 1):
    sum+=i
print("Sum of all integers from 0 to",number,"is",sum)

product = 1
for i in range(1,number + 1):
    product*=i
print("Product of all integers from 1 to",number,"is",product)


#while loops
print("\nUsing while loop:")
n=0
sum=0
while n <= number:
    sum+=n
    n+=1
print("Sum of all integers from 0 to",number,"is",sum)

n=1
product=1
while n <= number:
    product*=n
    n+=1
print("Product of all integers from 1 to",number,"is",product)