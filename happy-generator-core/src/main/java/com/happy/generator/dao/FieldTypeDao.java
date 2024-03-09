package com.happy.generator.dao;

import com.baomidou.mybatisplus.annotation.InterceptorIgnore;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.happy.generator.entity.FieldTypeEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.Set;

/**
 * 字段类型管理
 *
 * @author skycoder
 * 
 */
@Mapper
@InterceptorIgnore(tenantLine = "true")
public interface FieldTypeDao extends BaseMapper<FieldTypeEntity> {

    /**
     * 根据tableId，获取包列表
     */
    Set<String> getPackageByTableId(Long tableId);

    /**
     * 获取全部字段类型
     */
    Set<String> list();
}