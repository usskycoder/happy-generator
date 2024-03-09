package com.happy.generator.service.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.happy.generator.common.page.PageResult;
import com.happy.generator.common.query.Query;
import com.happy.generator.common.service.impl.BaseServiceImpl;
import com.happy.generator.config.DbType;
import com.happy.generator.config.GenDataSource;
import com.happy.generator.dao.DataSourceDao;
import com.happy.generator.entity.DataSourceEntity;
import com.happy.generator.service.DataSourceService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;


/**
 * 数据源管理
 *
 * @author skycoder
 * 
 */
@Service
@AllArgsConstructor
@Slf4j
public class DataSourceServiceImpl extends BaseServiceImpl<DataSourceDao, DataSourceEntity> implements DataSourceService {
    private final DataSource dataSource;

    @Override
    public PageResult<DataSourceEntity> page(Query query) {
        IPage<DataSourceEntity> page = baseMapper.selectPage(
                getPage(query),
                getWrapper(query)
        );
        return new PageResult<>(page.getRecords(), page.getTotal());
    }

    @Override
    public List<DataSourceEntity> getList() {
        return baseMapper.selectList(Wrappers.emptyWrapper());
    }

    @Override
    public String getDatabaseProductName(Long dataSourceId) {
        if (dataSourceId.intValue() == 0) {
            return DbType.MySQL.name();
        } else {
            return getById(dataSourceId).getDbType();
        }
    }

    @Override
    public GenDataSource get(Long datasourceId) {
        // 初始化配置信息
        GenDataSource info = null;
        if (datasourceId.intValue() == 0) {
            try {
                info = new GenDataSource(dataSource.getConnection());
            } catch (SQLException e) {
                log.error(e.getMessage(), e);
            }
        } else {
            info = new GenDataSource(this.getById(datasourceId));
        }

        return info;
    }

    @Override
    public boolean save(DataSourceEntity entity) {
        entity.setCreateTime(new Date());
        return super.save(entity);
    }
}