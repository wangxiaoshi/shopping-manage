package com.huihong.alpha.dao;

import com.huihong.alpha.model.Model;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ModelDao {

    @Select("")
    List<Model> getAllModel();
}
