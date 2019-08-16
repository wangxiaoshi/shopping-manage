package com.huihong.alpha.dao;

import com.huihong.alpha.model.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserDao {

    @Insert("INSERT INTO USER" +
            "(" +
            "   user_password," +
            "   user_email," +
            "   user_gender," +
            "   user_role," +
            "   user_name," +
            "   user_birthday," +
            "   user_province," +
            "   user_city," +
            "   user_area" +
            ")" +
            "VALUES" +
            "(" +
            "   #{userPassword}," +
            "   #{userEmail}," +
            "   #{userGender}," +
            "   #{userRole}," +
            "   #{userName}," +
            "   #{userBirthday}," +
            "   #{userProvince}," +
            "   #{userCity}," +
            "   #{userArea}" +
            ")")
    @Options(useGeneratedKeys = true, keyProperty = "userID", keyColumn = "user_id")
    long createUser(User user);

    @Select("SELECT u.user_id," +
            "       u.user_name," +
            "       u.user_email," +
            "       u.user_reg_time," +
            "       u.user_role," +
            "       (SELECT COUNT(*) " +
            "        FROM alpha.model" +
            "        WHERE model.user_id = u.user_id) uploadSum " +
            "FROM alpha.user u")
    List<User> getAllUser();

    @Select("SELECT " +
            "    u.user_id," +
            "    u.user_name," +
            "    u.user_gender," +
            "    u.user_birthday," +
            "    u.user_role," +
            "    u.user_email," +
            "    u.user_phone," +
            "    u.user_reg_time," +
            "    u.user_province," +
            "    u.user_city," +
            "    u.user_area, " +
            "    (SELECT " +
            "            COUNT(*) " +
            "        FROM " +
            "            alpha.model " +
            "        WHERE" +
            "            model.user_id = u.user_id) uploadSum " +
            "FROM " +
            "    alpha.user u " +
            "WHERE " +
            "   u.user_id = #{userID}")
    User getUser(Long userID);
}
