package com.happy.generator.utils;

import com.happy.generator.config.DbType;
import com.happy.generator.config.GenDataSource;
import oracle.jdbc.OracleConnection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * DB工具类
 *
 * @author skycoder
 * 
 */
public class DbUtils {
    private static final int CONNECTION_TIMEOUTS_SECONDS = 6;

    /**
     * 获得数据库连接
     */
    public static Connection getConnection(GenDataSource dataSource) throws ClassNotFoundException, SQLException {
        DriverManager.setLoginTimeout(CONNECTION_TIMEOUTS_SECONDS);
        Class.forName(dataSource.getDbType().getDriverClass());

        Connection connection = DriverManager.getConnection(dataSource.getConnUrl(), dataSource.getUsername(), dataSource.getPassword());
        if (dataSource.getDbType() == DbType.Oracle) {
            ((OracleConnection) connection).setRemarksReporting(true);
        }

        return connection;
    }


}