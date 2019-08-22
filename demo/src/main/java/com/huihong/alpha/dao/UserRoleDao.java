package com.huihong.alpha.dao;

import com.huihong.alpha.model.UserRole;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

public interface UserRoleDao {

    /**
     * 
     * @Description:新增用户角色
     * @param:  UserRole
     */
	@Insert("INSERT INTO USER_ROLE " +
            "  (" +
            "    user_name," +
            "    role_id" +
            "  ) " +
            "VALUES " +
            "  (" +
            "    #{userName}," +
            "    #{roleID}" +
            "  )") 
    void createUserRole(UserRole userRole);
    
     /**
     * 
     * @Description:修改用户角色
     * @param:  UserRole
     */
    @Update("UPDATE USER_ROLE" +
            "   SET " +
            "       role_id = #{roleID} " +
            " WHERE user_name = #{userName}")
    void updateUserRole(UserRole userRole);

    /**
     * 
     * @Description:删除用户角色
     * @param:  UserRole
     */
    @Delete("DELETE FROM USER_ROLE WHERE user_name = #{userName}")
    void deleteUserRole(String userName);
	
    /**
     * 
     * @Description:查询用户角色详情
     * @param:  UserRole
     */
    @Select("SELECT user_name,"+
            "       role_id"+
            "  FROM USER_ROLE"+
            " WHERE user_name = #{userName} AND role_id = #{roleID}")
    UserRole getUserRole(String userName, Long roleID);
    
    /**
    * <b>Description:</b><br> 校验用户是否已存在角色
    * @param userName
    * @param roleID
    * @return
    * @Note
    * <b>Author:</b> yehan
    * <br><b>Date:</b> 2019年8月8日 下午3:35:31
    */
    @Select("SELECT COUNT(1)"+
            "  FROM USER_ROLE"+
            " WHERE user_name = #{userName} AND role_id = #{roleID}")
    int isExistUserRole(String userName, Long roleID);

    /**
     * @Description:通过用户名查找其角色id
     * @param userName
     * @return
     */
    @Select("SELECT ur.role_id " +
            "FROM alpha.user_role ur " +
            "WHERE #{userName} = ur.user_name ")
    Long getRoleByUserName(String userName);

}