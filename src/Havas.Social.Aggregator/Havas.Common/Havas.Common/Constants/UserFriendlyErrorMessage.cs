namespace Havas.Common.Constants
{
    /// <summary>
    /// User Friendly Error Messages
    /// </summary>
    public enum UserFriendlyErrorMessage
    {
        //Create user error
        [StringValue("This user name already exists.")]
        DuplicateUserName = 1,
        [StringValue("There are bad words in your submission.")]
        BadWordsFound = 2,
        [StringValue("Invalid email")]
        InvalidEmail = 3,
        [StringValue("We can not process your request right now")]
        GenericError = 4,
        [StringValue("Invalid username and/or password")]
        InvalidLogin = 5,
        [StringValue("Not enough money in checking account.")]
        NotEnoughMoney = 6,
        [StringValue("Not enough fuel.")]
        NotEnoughFuel = 7,
        [StringValue("No record of that email address on file, please check and try again.")]
        NonExistingEmail = 8,
        [StringValue("No record associated with this ID found.")]
        NonExistingRecord = 9,
        [StringValue("Your spaceship has already reached the highest level")]
        ReachHighestFuelLevel = 10,
        [StringValue("Could not save the lesson plan.")]
        LessonPlanSaveUnsuccessful = 11,
        [StringValue("No user found with this user name.")]
        NonExistingUserName = 12,
        [StringValue("Wrong secret question and/or answer.")]
        InvalidSecrettQuestionAnswer = 13,
        [StringValue("Invalid password.")]
        InvalidPassword = 14,
        [StringValue("There are bad words in your first name.")]
        BadFirstName = 15,
        [StringValue("There are bad words in your astronaut name.")]
        BadAstronautName = 16,
        [StringValue("There are bad words in your first name and astronaut name.")]
        BadFirstNameAndAstronautName = 17,
        [StringValue("User is not logged in.")]
        NotLoggedIn = 18        

    }
}