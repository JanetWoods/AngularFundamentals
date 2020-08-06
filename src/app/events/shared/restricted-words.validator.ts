import {FormControl} from '@angular/forms'

   // 'restrictedWords' is a function that returns a function and that function is a validator function.  The reason for that is so that we can access the words from the inner function.  We are going to use those words in the error message.
  export function restrictedWords(words) {
  return (control: FormControl): { [key: string]: any } => {
    //checking \/ to see if words are passed in (of course they are)\/
    if (!words) return null

    // \/ looping over the keywords and checking the control's value to see if it includes any those words. It returns that word if found, or null if not.  Then it filters out the nulls.
    var invalidWords = words
      .map(w => control.value.includes(w) ? w : null)
      .filter(w => w != null)

    //If there are any this.restrictedWords found they will be returned as one comma separated string of words.  IF none, returns null.
    return invalidWords && invalidWords.length > 0
      ? { 'restrictedWords': invalidWords.join(', ') }
      : null
  }
}
