package com.happy.generator.dao;

import com.baomidou.mybatisplus.annotation.InterceptorIgnore;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.happy.generator.entity.DataSourceEntity;
import org.apache.ibatis.annotations.Mapper;

/**
 * 数据源管理
 *
 * @author skycoder
 * 
 */
@Mapper
@InterceptorIgnore(tenantLine = "true")
public interface DataSourceDao extends BaseMapper<DataSourceEntity> {

}