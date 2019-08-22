package com.huihong.alpha.util;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
//Password length needs to be at least 8 bits. And it must contain at least three of the
// following types: Uppercase, lowercase, numbers, symbols.
// Different combinations will increase points, simple combinations will decrease.
public class CheckPswMeter {
    private String psw;
    private int length;//Password length
    private int upperAlp = 0;//Length of uppercase charachters
    private int lowerAlp = 0;//Length of lowercase charachters
    private int num = 0;//length of numbers
    private int charlen = 0;//Length of symbols

    public CheckPswMeter(String psw){
        this.psw = psw.replaceAll("\\s", "");
        this.length = psw.length();
    }

    //Points of the length
    public int checkPswLength(){
        return this.length*4;
    }

    //Points of the uppercase
    public int checkPswUpper() {
        String reg = "[A-Z]";
        Pattern pattern = Pattern.compile(reg);
        Matcher matcher = pattern.matcher(psw);
        int j = 0;
        while (matcher.find()) {
            j++;
        }
        this.upperAlp = j;
        if (j<=0) {
            return 0;
        }
        return (this.length-j)*2;
    }
    //Points of the lowercase
    public int checkPwsLower(){
        String reg = "[a-z]";
        Pattern pattern = Pattern.compile(reg);
        Matcher matcher = pattern.matcher(this.psw);
        int j = 0;
        while (matcher.find()) {
            j++;
        }
        this.lowerAlp = j;
        if (j<=0) {
            return 0;
        }
        return (this.length-j)*2;
    }

    //Points of the numbers
    public int checkNum(){
        String reg = "[0-9]";
        Pattern pattern = Pattern.compile(reg);
        Matcher matcher = pattern.matcher(this.psw);
        int j = 0;
        while (matcher.find()) {
            j++;
        }
        this.num = j;
        if (this.num == this.length) {
            return 0;
        }
        return j*4;
    }
    //Points of the symbols
    public int checkChar(){
        charlen = this.length -this.upperAlp
                -this.lowerAlp - this.num;
        return this.charlen*6;
    }

    //Combination of numbers and symbols
    public int checkNumOrCharInStr(){
        int j = this.num + this.charlen -1;
        if (j<0) {
            j=0;
        }
        if (this.num+this.charlen == this.length) {
            j = this.length - 2;
        }
        return j*2;
    }
    /* Lowest requirement of password,
     * this method can only return after all the positive methods above
     */
    public int lowerQuest(){
        int j = 0;
        if (this.length>=8) {
            j++;
        }
        if (this.upperAlp>0) {
            j++;
        }
        if (this.lowerAlp > 0) {
            j++;
        }
        if (this.num>0) {
            j++;
        }
        if (this.charlen >0 ) {
            j++;
        }
        if (j>=4) {

        }else {
            j = 0;
        }
        return j*2;
    }
    /**=================Negative factors=====================**/
    //Contains only letters
    public int onlyHasAlp(){
        if (this.length == (this.upperAlp+this.lowerAlp)) {
            return -this.length;
        }
        return 0;
    }

    //Contains only numbers
    public int onlyHasNum(){
        if (this.length == this.num) {
            return -this.length;
        }
        return 0;
    }
    //Repeating characters
    public int repeatDex(){
        char[] c = this.psw.toLowerCase().toCharArray();
        HashMap<Character, Integer> hashMap =
                new HashMap<Character, Integer>();
        for (int i = 0; i < c.length; i++) {
            if (hashMap.containsKey(c[i])) {
                hashMap.put(c[i], hashMap.get(c[i])+1);
            }else {
                hashMap.put(c[i], 1);
            }
        }
        int sum = 0;
        Iterator<Map.Entry<Character, Integer>> iterator =
                hashMap.entrySet().iterator();
        while (iterator.hasNext()) {
            int j = iterator.next().getValue();
            if(j>0){
                sum = sum + j*(j-1);
            }
        }
        return -sum;
    }

    //Repeating uppercase
    public int seriesUpperAlp(){
        int j=0;
        char[] c = this.psw.toCharArray();
        for (int i = 0; i < c.length-1; i++) {
            if(Pattern.compile("[A-Z]").matcher(c[i]+"").find()){
                if (Pattern.compile("[A-Z]").matcher(c[i+1]+"").find()) {
                    j++;
                }
            }
        }
        return -2*j;
    }

    //Repeating lowercase
    public int seriesLowerAlp(){
        String reg = "[a-z]";
        int j=0;
        char[] c = this.psw.toCharArray();
        for (int i = 0; i < c.length-1; i++) {
            if (Pattern.compile(reg).matcher(c[i]+"").find()
                    &&c[i]+1==c[i+1]) {
                j++;
            }
        }
        return -2*j;
    }

    //Repeating numbers
    public int seriesNum(){
        String reg = "[0-9]";
        Pattern pattern = Pattern.compile(reg);
        char[] c = this.psw.toCharArray();
        int j=0;
        for (int i = 0; i < c.length-1; i++) {
            if (pattern.matcher(c[i]+"").matches()
                    &&pattern.matcher(c[i+1]+"").matches()) {
                j++;
            }
        }
        return -2*j;
    }
    //serial letters more than three eg.: abc xyz
    public int seriesAlp2Three(){
        int j=0;
        char[] c = this.psw.toLowerCase().toCharArray();
        for (int i = 0; i < c.length-2; i++) {
            if (Pattern.compile("[a-z]").matcher(c[i]+"").find()) {
                if ((c[i+1]==c[i]+1) && (c[i+2]==c[i]+2)) {
                    j++;
                }
            }
        }
        return -3*j;
    }

    //serial numbers more than three eg.: 123 789
    public int seriesNum2Three(){
        int j=0;
        char[] c = this.psw.toLowerCase().toCharArray();
        for (int i = 0; i < c.length-2; i++) {
            if (Pattern.compile("[0-9]").matcher(c[i]+"").find()) {
                if ((c[i+1]==c[i]+1) && (c[i+2]==c[i]+2)) {
                    j++;
                }
            }
        }
        return -3*j;
    }
    public int checkPassword(){
        int sum = 0;
        sum =  sum + checkPswLength()
                + checkPwsLower()
                + checkPswUpper()
                + checkNum()
                + checkChar()
                + checkNumOrCharInStr() //⬆positive ⬇negative
                + onlyHasAlp()
                + onlyHasNum()
                + repeatDex()
                + seriesAlp2Three()
                + seriesNum2Three()
                + seriesLowerAlp()
                + seriesUpperAlp()
                + seriesNum();
        if (sum < 0) {
            sum = 0;
        } else if (sum > 100) {
            sum = 100;
        }
        return sum;
    }


}
