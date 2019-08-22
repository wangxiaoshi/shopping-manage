package com.huihong.alpha.service;

import com.huihong.alpha.dao.ModelDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModelService {
    @Autowired
    private ModelDao modelDao;
}
