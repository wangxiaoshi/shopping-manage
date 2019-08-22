package com.huihong.alpha.dao;

import com.huihong.alpha.model.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserDao {

    @Insert("INSERT INTO USER" +
            "(" +
            "   user_password," +
            "   user_email," +
            "   user_gender," +
            "   user_name," +
            "   user_birthday," +
            "   user_province," +
            "   user_city," +
            "   user_area," +
            "   user_phone " +
            ")" +
            "VALUES" +
            "(" +
            "   #{userPassword}," +
            "   #{userEmail}," +
            "   #{userGender}," +
            "   #{userName}," +
            "   #{userBirthday}," +
            "   #{userProvince}," +
            "   #{userCity}," +
            "   #{userArea}," +
            "   #{userPhone} " +
            ")")
    @Options(useGeneratedKeys = true, keyProperty = "userID", keyColumn = "user_id")
    long createUser(User user);

    @Select("SELECT u.user_id," +
            "       u.user_name," +
            "       u.user_email," +
            "       u.user_reg_time," +
            "       (SELECT ur.role_id FROM alpha.user_role ur WHERE u.user_name = ur.user_name) user_role," +
            "       (SELECT COUNT(*) " +
            "        FROM alpha.model" +
            "        WHERE model.user_id = u.user_id) uploadSum " +
            "FROM user u")
    List<User> getAllUser();

    @Select("SELECT " +
            "    u.user_id," +
            "    u.user_name," +
            "    u.user_gender," +
            "    u.user_birthday," +
            "    (SELECT ur.role_id FROM alpha.user_role ur WHERE u.user_name = ur.user_name) user_role," +
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

    @Update("UPDATE alpha.user " +
            "SET " +
            "    user_name = #{userName}," +
            "    user_email = #{userEmail}," +
            "    user_phone = #{userPhone}," +
            "    user_gender = #{userGender}," +
            "    user_province = #{userProvince}, " +
            "    user_city = #{userCity}, " +
            "    user_area = #{userArea} " +
            "WHERE " +
            "    user_id = #{userID}")
    void updateUser(User user);

    @Delete("DELETE FROM user WHERE user_id = #{userID}")
    void deleteUser(Long userID);

    @Select("SELECT u.user_id," +
            "       u.user_name," +
            "       u.user_email," +
            "       u.user_reg_time," +
            "       (SELECT ur.role_id FROM alpha.user_role ur WHERE u.user_name = ur.user_name) user_role," +
            "       (SELECT COUNT(*) " +
            "        FROM alpha.model" +
            "        WHERE model.user_id = u.user_id) uploadSum " +
            "FROM alpha.user u " +
            "WHERE " +
            "   u.user_id = #{keywordLong} OR u.user_name = #{keywordStr}")
    List<User> getUserBy(String keywordStr, Long keywordLong);

    /**
     * @Description 针对UserLoginService的方法, 获取用户名密码以便检验
     * @param userName
     * @return
     */
    @Select("SELECT u.user_name," +
            "       u.user_password " +
            "FROM alpha.user u " +
            "WHERE " +
            "   u.user_name = #{userName}")
    User getUserByName(String userName);

}
