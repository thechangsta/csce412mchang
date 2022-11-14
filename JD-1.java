// Imports are not allowed in this exercise.

/**
	This exercise involves implementing several methods. Stubs for each method
	with documentation are given here. It is your task to fill out the code in
	each method body so that it runs correctly according to the documentation.

	You can run this file by compiling TestFunctions1.java
	It will call this program and run it, validating the test you choose.

	Example inputs with output are provided in the comments before each method.
	At a minimum, your solutions must pass these tests.
	Adapted by Robert Lightfoot
	from an exercise by Bruce Gooch.

	@author Matthew Le 928009311
	also ad your UIN.
	@version October 19, 2021
**/
public class ExerciseFunctions{

// this is the example format for commenting for JavaDoc.   Complete the rest this way.

	/**
		Deciding is Water is Wet is a challenge. This code only determines if
		both values are wet.

		isWet("wet", "wet") returns true
		isWet("wet", "water") returns false
		isWet("water", "wet") returns false
		isWet("any-string", "any-string") returns false
		@param firstString String,
		@param secondString String,
		@return true only if both input strings are "wet".
	*/
   public static boolean isWet(String firstString, String secondString)
   {
		 //your code here
      return false;
   }// isWet

	/** Boolean function returns true if the given string begins with "win",
		 except the 'w' can be anything, so "win", "fin", "pin", "8in" .. all count.

		 winCondition("win prizes") returns true
		 winCondition("pin the tail") returns true
		 winCondition("wit fries?") returns false
		 winCondition("pit viper") returns false
		 @param original String,
		 @return true if the string begins with "*in", where * can be replaced with any character
	 */
	public static boolean winCondition(String original)
	{
		//your code here
    return false;
	}//end winCondition

	/** Int function that returns the largest of 3 integers sent.
	 maxInt(1, 2, 3) returns 3
	 maxInt(3, 2, 3) returns 3
	 maxInt(2, 5, 3) returns 5
	 maxInt(7, 5, 4) returns 7
	 @param first int,
	 @param second int,
	 @param third int,
	 @return the max value of the three given
	 */
   public static int maxInt(int first, int second, int third)
   {
		 //your code here
		 return 0;
   }// end maxInt

	 /** If either string is nice, we return true.

	  isNice("nice", "any-string") returns true
	  isNice("any-string", "nice") returns true
	  isNice("any-string", "any-string") returns false
	  @param firstString String,
	  @param secondString String,
	  @return true if either string is "nice"
	  */
   public static boolean isNice(String firstString, String secondString)
   {
      //your code here
      return false;
   }//end isNice

	 /** Given two inttegers, return whichever is closer to ten.
	  In the event of a tie return 0.
	  Note that Math.abs(n) returns the absolute value of a number.

	  nearest10(8, 13) returns 8
	  nearest10(13, 8) returns 8
	  nearest10(13, 7) returns 0
	  @param firstNumber int,
	  @param secondNumber int,
	  @return return whichever given number is closer to ten
	  */
   public static int nearest10(int firstNumber, int secondNumber)
   {
		 //your code here
     return 0;
   }//end nearest10

	 /** Boolean function takes two non-negative int values as input.
	  and returns true if both argunents have the same last digit, such as with 27 and 57.
	  Note that the % "mod" operator computes remainders.

	  sameLastDigit(3, 3) returns true
	  sameLastDigit(7, 17) returns true
	  sameLastDigit(6, 17) returns false
	  sameLastDigit(3, 113) returns true
	  @param firstNumber int,
	  @param secondNumber int,
	  @return true if both arguments have the same last digit
	  */
   public static boolean sameLastDigit(int firstNumber, int secondNumber)
   {
      //your code here
      return false;
   }// end sameLastDigit

	 /** Fred Rogers thought 143 was a special number.
	  This method returns "x loves you" if it is sent a string "I love x"
	  where x can be "anything"
	  if the input is not of the form "I love any-thing" the function
	  returns the string "Fred Rogers 143"

	  lovesYou("I love TAMU") returns "TAMU loves you"
	  lovesYou("I love Basketball") returns "Basketball loves you"
	  lovesYou("") returns "Fred Rogers 143"
	  lovesYou("any thing else") returns "Fred Rogers 143"
	  @param original String,
	  @return the string "x loves you" if given a string "I love x"
	  */
	public static String lovesYou(String original)
	{
	   //Your code here
	   return "returnValue";
	}//end lovesYou

	/** If 22 occurs at the end or beginning of the input String remove any whitespace
	 that occurs at the beginning or end of the String.

	 catch22("Catch 22") returns "Catch"
	 catch22("22 Rifle") returns "Rifle"
	 catch22("I have 22 dogs and no cats.") returns "I have  dogs and no cats."

	 ** Note this function does not need to remove whitespace inside the string
	 **the dog example output contains 2 spaces resulting when 22 was removed **
	 @param original String,
	 @return the given string without whitespace at the beginning or end, if "22" occurs at the beginning or end of the string
	 */
	public static String catch22(String original)
	{
	   //Your code here
	   return "returnValue";
	}//end catch22

	/** formalWords will return a string with each first charater of a word capitalized.

	 formalWords("hi") returns "Hi"
	 formalWords("This is our finest hour") returns "This Is Our Finest Hour"
	 @param original String,
	 @return the given string, but with the first letter of each word capitalized
	 */
	public static String formalWords(String original)
	{
	   //Your code here
	   return "returnValue";
	}// end formalWords

	/** deleteArticles will remove all articles in a phrase.

	 deleteArticles("cat") returns "cat"
	 deleteArticles("a cat") returns "cat"
	 deleteArticles("The cat in a hat") returns "cat in hat"

	 ** Note more strict whitespace removal required in this function **
	 You can assume that replacing double-spaces with single-spaces is always OK.
	 @param original String,
	 @return the given string without any articles (the, a, an)
	 */
	public static String deleteArticles(String original)
	{
		// your code here
	   return "returnValue";
	}//end deleteArticles

}//end ExerciseFunctions
